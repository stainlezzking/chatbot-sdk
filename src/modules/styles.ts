export const buttonStyles: Partial<CSSStyleDeclaration> = {
  backgroundColor: "#1C274C",
  width: "fit-content",
  padding: "0.75rem",
  borderRadius: "100%",
  fill: "white",
  stroke: "white",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "all 500ms ease-in-out",
  position: "relative",
};

export const buttonSpanStyle: Partial<CSSStyleDeclaration> = {
  top: "-5px",
  right: "-3px",
  display: "flex",
  borderRadius: "100%",
  width: "20px",
  height: "20px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "red",
  position: "absolute",
  fontSize: "12px",
  color: "white",
};

export const wrapperStyles: Partial<CSSStyleDeclaration> = {
  right: "1.25rem",
  bottom: "1.25rem",
  position: "absolute",
  zIndex: "1000000",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "1rem",
  borderRadius: "20px",
  width: "fit-content",
};
