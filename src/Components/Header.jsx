const Header = () => {
    const headerStyle = {
        backgroundColor: "#3299CC",
        padding: '20px',
        textAlign: 'center',
        borderBottom: '2px solid black',
        borderRadius: '10px',
        width: '500px',
        margin: 'auto',
        marginTop: '10px'
    }

    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: 'white'
    }

    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>First System</h1>
        </header>
    );
};

export default Header;