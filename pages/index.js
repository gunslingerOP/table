import { Card, Button, Input, Table } from "antd";
const { Search } = Input;

import Student from "../states/store";
import Pop from "../components/modal";
import Info from "../components/table";
import { useEffect } from "react";
const Home = () => {
  const { setIsModal, setSearch, search, data, arr, setArr,setData } = Student();
  // const srch = (val) => {
  //   setArr([...arr, data]);
  //   setArr(arr.filter((e) => e.name == val));
  //   console.log(arr);
  //   console.log(data);
  // };

  return (
    <div>
      <Card
        hoverable
        title={
          <div className="flex">
            <Button onClick={() => setIsModal(true)}>Add New</Button>
            <Search
              placeholder="input search text"
              onSearch={(value) => {
                if(value){
        
                   setData(data.filter((e) => e.name == value));
                  
                }
                else{
                  setData(arr)
                }
              }}
              style={{ width: 300 }}
            />
          </div>
        }
      >
        <Info />
      </Card>
      <Pop />
    </div>
  );
};

export default Home;
