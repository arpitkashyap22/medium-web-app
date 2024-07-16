import { Auth } from "../components/Auth";
import { Quotes } from "../components/Quots";

export const Signup = () => {
  return (
    <div>
      <div className="grid-cols-1 grid lg:grid-cols-2">
        <div>
            <Auth type="signup"/>
        </div>
        <div ><Quotes
          comment="Hey there i am Developer of this product hope you like it"
          author="Arpit Kashyap"
          designation="Tech-Lead"
        ></Quotes></div>
        
      </div>
    </div>
  );
};
