import { Fragment, useEffect, useState } from "react";
import { AppRoutes } from "./_routes/AppRoutes";
import { useNavigate } from "react-router-dom";

export interface TypePost {
  name: string;
  data: {
    year: number;
    price: number;
    CPUmodel: string;
    hardDiskSize: string;
  };
}

export interface PostResponse {
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

export interface PutResponse extends Omit<PostResponse, "createdAt"> {
  updatedAt : string
}

export interface CatFactReqTypes {
  fact : string
  length : number
}

function App() {
  const navigate = useNavigate();

  const [catFact, setCatFact] = useState<string>("")
  const [postSample, setPostSample] = useState<PostResponse | null>(null)

  const [putSample, setPutSample] = useState<PutResponse | null>(null)
  const [deleteMessage, setDeleteMessage] = useState<string>("")
  const [patchSample, setPatchSample] = useState<PutResponse | null>(null)



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
      setPostSample(response.data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const putRequest = async () => {
    try {
      const response = await window.electron.putApiReqeust<TypePost, PutResponse>({
        url: "https://api.restful-api.dev/objects/ff808181932badb60194b77f7ed82333",
        data: {
          name: "Apple MacBook Pro 160000000000000",
          data: {
            year: 2019,
            price: 1849.99,
            CPUmodel: "Intel Core i999y", // Fixed the key
            hardDiskSize: "1 TB",     // Fixed the key
          },
        },
      })

      setPutSample(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getRequest = async () => {
    try {
      const response = await window.electron.getApiRequest<CatFactReqTypes>({url : "fact"})
      setCatFact(response.data.fact)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteRequest = async () => {
    try {
      const response = await window.electron.deleteApiRequest<{message : string}>({
        url : `https://api.restful-api.dev/objects/ff808181932badb60194bcc614982c28`
      })
      console.log(response)
      setDeleteMessage(response.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  const patchRequest  = async () => {
    try {
      const response = await window.electron.patchApiRequest<{name : string}, PutResponse >({
        url : "https://api.restful-api.dev/objects/ff808181932badb60194bec5443e2f16",
        data: {
          name: "Lenovo Pro dee 223",
        },
      })

      console.log(response)
      setPatchSample(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Fragment>
      <AppRoutes />
      <div className="text-black"onClick={() => navigate("resource")}>
        ajsfkljail
      </div>
      <div>
        {catFact}
      </div>
      <div>
        {postSample && postSample.name}
      </div>
      <div>
        {putSample && putSample.name}
      </div>
      <div>
        {deleteMessage}
      </div>
      <div>
        {patchSample && patchSample.name}
      </div>

      <div onClick={handleClickPost}>
        hello try post
      </div>
      <div onClick={getRequest}>
        Smaple Gte request
      </div>

      <div onClick={putRequest}>
        sample put request
      </div>

      <div onClick={deleteRequest}>
        sample delete request
      </div>

      <div onClick={patchRequest}>
        sample patch request
      </div>
    </Fragment>
  );
}

export default App;
