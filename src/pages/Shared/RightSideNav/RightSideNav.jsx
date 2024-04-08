import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
     <div className="px-3 space-y-3 mb-5">
      <h2 className="text-3xl font-semibold">Login With</h2>
      <button className="btn btn-outline w-full ">
        <FaGoogle></FaGoogle>
         Login with Google
      </button>
      <button className="btn btn-outline w-full ">
      <FaGithub />
         Login with Github
      </button>
     </div>
     <div className="px-3 space-y-3 mb-5">
      <h2 className="text-3xl font-semibold">Find Us On </h2>
      <a href="" className="btn btn-outline w-full ">
        <FaFacebook></FaFacebook>
         Facebook 
      </a>
      <a href="" className="btn btn-outline w-full ">
      <FaTwitter />
         Twitter
      </a>
      <a href="" className="btn btn-outline w-full ">
      <FaInstagram />
         Instagram 
      </a>
     </div>

     {/* q zone  */}
     <div className="p-4 space-y-3 mb-5">
      <h2 className="text-3xl font-semibold">Q Zone </h2>
      <img src={qZone1} alt="" />
      <img src={qZone2} alt="" />
      <img src={qZone3} alt="" />
     </div>
    </div>
  );
};

export default RightSideNav;