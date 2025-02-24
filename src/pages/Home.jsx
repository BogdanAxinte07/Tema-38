import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";



function Home() {
  // Generam endpoint-urile pentru categoriile de stiri.
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 6);
  const politicsNewsEndpoint = getNewsCategoriesEndpoint ("politics", 1, 6);
  // Fetch-uim datele de la The Guardian.
  let technologyData = useFetch(technologyNewsEndpoint);
  let footballData = useFetch(footballNewsEndpoint);
  let politicsData = useFetch(politicsNewsEndpoint);
  // Adaptam datele de la server la datele necesare componentelor de react.
  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedFootballData = getNewsList(footballData);
  const adaptedPoliticsData = getNewsList(politicsData);



  return (
    <Layout>
      {/* sectiunea pentru tech */}
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          {/* Afisam stirile despre technologie. */}
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>
      {/* Sectiunea pentru fotbal */}
      <section className="football my-5">
        <Container>
          <h1 className="mb-5 pt-3">Fotbal</h1>
          {/* Afisam stirile despre fotbal. */}
          <NewsCardList newsList={adaptedFootballData} />
          <p>
            Vezi toate știrile legate de fotbal în secțiunea{" "}
            <Link to="/category/football" className="text-secondary">
              Fotbal
            </Link>
          </p>
        </Container>
      </section>
       {/* sectiunea pentru [politica] */}
       <section className="policy my-5">
        <Container>
          <h1 className="mb-5 pt-3">Politică</h1>
          {/* Afisam stirile despre politica. */}
          <NewsCardList newsList={adaptedPoliticsData} />
          <p>
            Vezi toate știrile legate de politică în secțiunea{" "}
            <Link to="/category/politics" className="text-secondary">
              Politică
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* sectiunea pentru favorite */}
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p className="pb-3">
            Vizitează secțiunea{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            pentru a vedea știrile adăugate.
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
