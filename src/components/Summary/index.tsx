import { Container } from "./styles";
import { useContext } from "react";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {

    const { transactions } = useTransactions();

    const summary = transactions.reduce((accumulator, transaction) => {
        if (transaction.type === 'deposit') {
            accumulator.deposit += transaction.amount;
            accumulator.total += transaction.amount;
        } else {
            accumulator.withdraws += transaction.amount;
            accumulator.total -= transaction.amount;
        }
        return accumulator
    }, {
        deposit: 0,
        withdraws: 0,
        total: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(summary.deposit)
                    }
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>-
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(summary.withdraws)
                    }
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(summary.total)
                    }
                </strong>
            </div>
        </Container>
    )
}