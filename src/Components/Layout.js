import HeaderMenu from './Header/HeaderMenu';
import classes from './Layout.module.css'
const Layout = (props) => {

    return (
        <section className={classes.layout}>
            <HeaderMenu />
            <main>{props.children}</main>
        </section>
    )
}

export default Layout;