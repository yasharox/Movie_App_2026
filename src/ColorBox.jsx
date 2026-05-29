export function ColorBox({ clr }) {

  const styles = {
    backgroundColor: clr,
    height: "30px",
    width: "200px",
    margin: "10px"
  };

  return (
    <div style={styles}></div>

  );
}
