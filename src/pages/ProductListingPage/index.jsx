import { useEffect, useState } from "react";
import { SectionStyled1, SectionStyled2 } from "./styled";
import axios from "axios";
import { ProductCard } from "../../components/ProductCard";

export const ProductListingPage = () => {
  const [estado, setEstado] = useState("");
  const [listaProdutos, setListaProdutos] = useState();

  async function consumirAPI() {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setListaProdutos(data);
  }
  useEffect(() => {
    consumirAPI();
  }, []);
  return (
    <>
      <SectionStyled1>
        <div>
          <h2>Resultados para "Tênis</h2>
        </div>
        <div className="ordenar">
          <label htmlFor="ordenar">Ordenar por:</label>
          <select id="ordenar" name="ordenar">
            <option value="relevante">Mais Relevante</option>
            <option value="maior-preco">Maior Preço</option>
            <option value="menor-preco">Menor Preço</option>
          </select>
        </div>
      </SectionStyled1>

      <SectionStyled2>
        <div className="ordenarPor">
          <h3>Filtrar por</h3>
          <hr />
          {/* ======== DIV 1  Marca ======== */}
          <div className="divsBlocos">
            <h4>Marca</h4>
            <div>
              <input type="checkbox" value={"Adiddas"} id="Adiddas" />
              <label htmlFor="Adiddas">Adiddas</label>
            </div>
            <div>
              <input type="checkbox" value={"Calenciaga"} id="Calenciaga" />
              <label htmlFor="Calenciaga">Calenciaga</label>
            </div>
            <div>
              <input type="checkbox" value={"K-Swiss"} id="K-Swiss" />
              <label htmlFor="K-Swiss">K-Swiss</label>
            </div>
            <div>
              <input type="checkbox" value={"Nike"} id="Nike" />
              <label htmlFor="Nike">Nike</label>
            </div>
            <div>
              <input type="checkbox" value={"Puma"} id="Puma" />
              <label htmlFor="Puma">Puma</label>
            </div>
          </div>

          {/* ====== DIV 2 => CATEGORIA ========= */}
          <div className="divsBlocos">
            <h3>Categoria</h3>

            <label htmlFor="Esporte">
              <input type="checkbox" />
              Esporte e lazer
            </label>

            <label htmlFor="Casual">
              <input type="checkbox" />
              Casual
            </label>

            <label htmlFor="Utilitário">
              <input type="checkbox" />
              Utilitário
            </label>

            <label htmlFor="Corrida">
              <input type="checkbox" />
              Corrida
            </label>
          </div>
          {/* ====== DIV 3 => Genero ========= */}
          <div className="divsBlocos">
            <h3>Gênero</h3>

            <label htmlFor="Masculino">
              <input type="checkbox" />
              Masculino
            </label>

            <label htmlFor="Feminino">
              <input type="checkbox" />
              Feminino
            </label>
            <label htmlFor="Unisex">
              <input type="checkbox" value={"Unisex"} />
              Unisex
            </label>
          </div>

          {/* ====== DIV 4 => Estado ========= */}
          <div className="divsBlocos">
            <h3>Estado</h3>
            <label htmlFor="Novo">
              <input
                type="radio"
                value={"Novo"}
                name="estado"
                onChange={(e) => setEstado(e.target.value)}
              />
              Novo
            </label>
            <label htmlFor="Usado">
              <input
                type="radio"
                value={"Usado"}
                name="estado"
                onChange={(e) => setEstado(e.target.value)}
              />
              Usado
            </label>
          </div>
        </div>

        {/* ==== ACABOU MINHA DIV ordenar ====== */}

        <div className="blocoProdutos">
          {listaProdutos && listaProdutos.map((e) => 
          (<ProductCard key={e.id} produto={e} />))}
        </div>
      </SectionStyled2>
    </>
  );
};
