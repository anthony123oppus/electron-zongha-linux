import { Fragment, useEffect } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";

interface TypePost {
  name: string;
  data: {
    year: number;
    price: number;
    CPUmodel: string;
    hardDiskSize: string;
  };
}

interface PostResponse {
  id : string;
  name : string;
  data: {
    year: number;
    price: number;
    CPUmodel: string;
    hardDiskSize: string;
  };
  createdAt : string
}

interface CatFactReqTypes {
  fact : string
  length : number
}

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    return window.electron.subscribeSystemView((view) => navigate(view));
  }, [navigate]);

  const handleClickPost = async () => {
    try {
      const response = await window.electron.postApiRequest<TypePost, PostResponse>({
        url: "https://api.restful-api.dev/objects",
        data: {
          name: "Apple MacBook Pro 16",
          data: {
            year: 2019,
            price: 1849.99,
            CPUmodel: "Intel Core i9", // Fixed the key
            hardDiskSize: "1 TB",     // Fixed the key
          },
        },
      });
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const getRequest = async () => {
    try {
      const response = await window.electron.getApiRequest<CatFactReqTypes>({url : "fact"})
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Fragment>
      <AppRoutes />
      <a href="/resource" className="text-black">
        ajsfkljail
      </a>

      <div onClick={handleClickPost}>
        hello try post
      </div>
      <div onClick={getRequest}>
        Smaple Gte request
      </div>
    </Fragment>
  );
}

export default App;
