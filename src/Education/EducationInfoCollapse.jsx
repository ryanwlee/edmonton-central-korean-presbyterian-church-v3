import useCollapse from "./useCollapse";

const EducationInfoCollapse = ({ collapsed, children }) => {
  const { ref, height } = useCollapse(collapsed);

  return (
    <div
      ref={ref}
      style={{
        height,
        overflow: "hidden",
        transition: "height 0.5s ease, padding 0.5s ease",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        paddingLeft: "30px",
        paddingRight: "30px",
        marginTop: collapsed ? "0px" : "30px",
        marginBottom: collapsed ? "0px" : "30px",
      }}
    >
      {children}
    </div>
  );
};

export default EducationInfoCollapse;
