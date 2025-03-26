interface IlayoutInterFace{
    children:React.ReactNode
}
const Layout = ({children}:IlayoutInterFace) => {
    return (<>
    {children}
    </>  );
}
 
export default Layout;