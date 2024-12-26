export const buttonStyles = {
    textTransform: "none",
    fontWeight: 500,
    fontFamily: "Geologica, sans-serif",
    color: "#000",
    minWidth: "110px",
    height: "52px",
    padding: "15px 12px",
    gap: "10px",
    borderRadius: "8px",
    border: "1px solid #202020",
    fontSize: "14px",
    justifyContent: "space-between",
    transition: "opacity 0.3s ease",
    "&:hover": { opacity: 1 },
};

export const menuStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "auto",
    gap: "10px",
    borderRadius: "24px",
    overflow: "hidden",
    padding: "25px",
};

export const getChipStyles = (selected: boolean) => ({
    cursor: "pointer",
    width: "100%",
    transition: "all 0.1s linear",
    transitionDelay: "0",
    justifyContent: "center",
    border: "1px solid #E3E3E3",
    fontWeight: 400,
    fontSize: "14px",
    fontFamily: "Geologica, sans-serif",
    colorAdjust: "#202020",
    ...(selected && {
        backgroundColor: "#E3E3E3",
        borderColor: "#202020",
        color: "#202020",
    }),
    "&:hover": {
        backgroundColor: "#E3E3E3",
        paddingTop: "16px !important",
        paddingBottom: "16px !important",
    },
});
