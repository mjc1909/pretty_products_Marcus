import NewsLetter from "../components/newsletter/NewsLetter";
import PageHeader from "../components/pageHeader/PageHeader";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import useFetchById from "../hooks/useFetchById";
import Favorites from "./favorites/Favorites";
import MyFavorites from "./myfavorites/MyFavorites";

const Home = () => {
    const {product} = useFetchById(2)
    
    return (
      <section>
        <PageHeader
         title='Pæne Produkter' subtitle='Her kan du se alle vores pæne produkter'
         headerImg={product?.images}
         />
         <SectionHeader 
       title='Brugernes Favoritter'
       
       />
       <Favorites />
       <SectionHeader title='Mine Favoritter' />
       
       <MyFavorites />
       <NewsLetter />
  

      </section>
    );
  };
  
  export default Home;
  