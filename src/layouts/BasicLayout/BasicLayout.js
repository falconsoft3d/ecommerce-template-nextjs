// import Header from "../../components/Header";

export default function BasicLayout(props) {
  const { children, className } = props;

  return (
    <div>
      {/* <Header /> */}
      <div className="content">{children}</div>
    </div>
  );
}