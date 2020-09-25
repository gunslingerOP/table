import Student from "../states/store";
import { Table, Tag, Button } from "antd";
const Info = () => {
  const { data, setData, setArr } = Student();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (value) => (
        <Tag color={value === "male" ? "geekblue" : "pink"}>{value}</Tag>
      ),
    },
    {
      title: "",
      dataIndex: "key",
      key: "key", //CHANGE THIS AND SEE
      render: (value) => (
        <Button
          danger
          type="text"
          onClick={() => {
            setData(data.filter((el) => el.key !== value));
          }}
        >
          Remove
        </Button>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};
export default Info;
