import styled from 'styled-components';

export const SectionContainer = styled.section`
    text-align: center;
    padding: 40px 20px;
    background-color: #F3F4F6;
`;

export const SectionTitle = styled.h2`
    font-size: 1.75rem; /* 28px */
    font-weight: 700;
    color: #374151;
    margin-bottom: 30px;
`;

export const CollectionsList = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 50px; /* Espaço entre os ícones */
    flex-wrap: wrap;
`;

export const CollectionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; /* Espaço entre o círculo e o texto */
    cursor: pointer;
`;

export const IconCircle = styled.div`
    width: 104px;
    height: 104px;
    border-radius: 50%;
    background-color: white;
    
    /* Centraliza o ícone dentro do círculo */
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease-in-out;

    /* DESTAQUE */
    border: 2px solid ${props => (props.$isActive ? '#C92071' : '#E5E7EB')};

    /* Estilizando o ícone (<i>) que está dentro do círculo */
    i {
        font-size: 2.5rem; /* Tamanho do ícone */
        color: ${props => (props.$isActive ? '#C92071' : '#6B7280')};
        transition: color 0.2s ease-in-out;
    }

    &:hover {
        border-color: #C92071;
        
        i {
            color: #C92071;
        }
    }
`;

export const CollectionLabel = styled.span`
    font-size: 1rem;
    color: #4B5563;
    font-weight: 500;
`;