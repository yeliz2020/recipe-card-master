import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Çökertme Kebabı",
    date: "8 Haziran 2021, Salı",
    image: "http://www.yemekvetatlitarifleri.com/tarif_images/resimler/tarifler/tarif_img/Cokertme-kebabi-tarifi-5017-650x433.jpg",
    description:
      "Çökertme kebabı Türk mutfağından Muğla, Bodrum, Milas bölgesine ait bir yemektir. Yapılışı için kızarmış kibrit inceliğinde patateslerin üzerine bonfile et yerleştirilir. Sarımsaklı yoğurt ve domates sosu ile birlikte servis edilir. Kimyon, pul biber, soğan, kekik ve benzer malzemeler de kullanılabilir.",
  };
  


  const likeCount = 193;
  const isLiked = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          title={recipeItem.title} 
          date={recipeItem.date} 
          description={recipeItem.description}
          image={recipeItem.image}
          count={likeCount}
          liked={isLiked}
          
        />
      </header>
    </div>
  );
}

export default App;
