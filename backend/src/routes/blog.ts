import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { jwt, sign, verify } from 'hono/jwt'
import {
    createBlogInput,
    updateBlogInput,
  } from "@arpitkashyap/medium-common";
  


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables : {
        userId: string
    }
}>();

// blogRouter.use('/*', async (c) => {
// 	const prisma = new PrismaClient({
//       datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());
//   // @ts-ignore
//   c.set("prisma", prisma);
// })

blogRouter.use('/*', async (c, next) => {
    //get the header
    const header = c.req.header("Authorization") || "";
    const token = header.split(" ")[1]
    //verify the header
    try {
        const response = await verify(token, c.env.JWT_SECRET)
    //if the header is correct, proceed
    //if not,we return the user a 403 status code
    if(response){
        c.set('userId', response.id);
        await next()
    }else{
      c.status(403)
      return c.json({error: "unauthorized"})
    }
    } catch (error) {
        c.status(403)
        return c.json({error: "unauthorized"})
    }
    
  })
  
  
  blogRouter.post('/',async (c)=>{
    const userId = await c.get('userId');

    const body = await c.req.json();
	const { success } = createBlogInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}
   
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL ,
      }).$extends(withAccelerate())

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        }
    })

    return c.json({
        id: post.id
    })
  })
  
  blogRouter.put('/',async (c)=>{
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const body = await c.req.json();
	const { success } = updateBlogInput.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}

	prisma.post.update({
		where: {
			id: body.id,
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

	return c.text('updated post');
  })
  
  blogRouter.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const posts = await prisma.post.findMany({});

	return c.json(posts);
  })
  

  blogRouter.get('/:id',async (c)=>{
    const id = await c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try{
        const post = await prisma.post.findUniqueOrThrow({
            where: {
                id: id
            },
        })
        return c.json({
            post
        });
    } catch(e){
        c.status(411);
        return c.json({
            error: "no post found for this id"
        })
    }
  })
  
