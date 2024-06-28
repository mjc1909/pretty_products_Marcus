import styles from './pageHeader.module.css'
const PageHeader = ({title, subtitle, headerImg}) => {

return(
<header className={styles.header} style={{ backgroundImage: `url(${headerImg})`}}>
    <div className={styles.headerContent}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    </div>
</header>


)


}
export default PageHeader;