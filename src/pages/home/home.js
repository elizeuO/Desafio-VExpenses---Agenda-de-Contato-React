import { useEffect, useState } from "react";
import Contact from "../../components/contact/contact";

function Home({user}) {
  return (
    
      <>
      {user && (
      <Contact/>
      )}
    </>
    
  );
}

export default Home;
