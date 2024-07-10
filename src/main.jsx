import { useCounterStore } from './store/counter.store'

function Main () {
  const { count, increment, decrement } = useCounterStore()
  return (
    <section>
      <h1>Incrementa o decrementa números</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <p>{count}</p>
    </section>
  )
}

export default Main
