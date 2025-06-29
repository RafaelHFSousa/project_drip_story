import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductDetailsPage } from "../../components/ProductDetails";
import { ProductCard } from "../../components/ProductCard";
import { CardSection } from "./styled";

export const ProductViewPage = () => {
  const { id } = useParams();
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [todosProdutos, setTodosProdutos] = useState([]);
  // MELHORIA: Adicionando um estado de carregamento para melhor UX
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função única para buscar todos os dados necessários
    async function buscarDados() {
      setLoading(true); // Inicia o carregamento
      try {
        // ======= Executa as duas chamadas em paralelo para mais performance =====
        const [produtoResponse, todosProdutosResponse] = await Promise.all([
          axios.get(`https://fakestoreapi.com/products/${id}`),
          axios.get("https://fakestoreapi.com/products"),
        ]);
        setProdutoSelecionado(produtoResponse.data);
        setTodosProdutos(todosProdutosResponse.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        // Aqui você poderia adicionar um estado de erro para mostrar uma mensagem ao usuário
      } finally {
        setLoading(false); // Finaliza o carregamento, com sucesso ou erro
      }
    }

    buscarDados();
    // O useEffect rodará novamente sempre que o 'id' da URL mudar.
  }, [id]);

  // MELHORIA: Otimizando o filtro com useMemo.
  // Este cálculo só será refeito se 'produtoSelecionado' ou 'todosProdutos' mudarem.
  const produtosRelacionados = useMemo(() => {
    if (!produtoSelecionado) {
      return [];
    }
    return todosProdutos.filter(
      (p) =>
        p.category === produtoSelecionado.category &&
        p.id !== produtoSelecionado.id
    );
  }, [produtoSelecionado, todosProdutos]);

  // Se estiver carregando, mostra uma mensagem
  if (loading) {
    return <div style={{ paddingLeft: "100px" }}>Carregando...</div>;
  }

  // Se, após carregar, não houver produto, mostra uma mensagem de erro
  if (!produtoSelecionado) {
    return <div style={{ paddingLeft: "100px" }}>Produto não encontrado.</div>;
  }

  return (
    <>
      <section style={{ paddingLeft: "30px" }}>
        <h2>
          {/* Adicionando a categoria ao "breadcrumb" */}
          <strong>Home</strong> / Produtos / {produtoSelecionado.category}
        </h2>
      </section>
      <section>
        <ProductDetailsPage produto={produtoSelecionado} />
      </section>
      {/* Renderiza a seção de relacionados apenas se houver itens */}
      {produtosRelacionados.length > 0 && (
        <section>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding: "50px 80px"}}>
            <h3 >
              Produtos Relacionados
            </h3>
            <Link style={{color:'#C92071', textDecoration:'none', fontWeight:'bold'}} to={"/produtos"}>
              Ver todos <i style={{marginLeft:'8px', color:'#C92071'}} className="pi pi-arrow-right"></i>
            </Link>
          </div>
          <CardSection>
            {produtosRelacionados.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </CardSection>
        </section>
      )}
    </>
  );
};
