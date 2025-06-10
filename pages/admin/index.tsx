
import { useState } from 'react';

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <main style={{ padding: 20, fontFamily: 'Arial' }}>
      {!loggedIn ? (
        <div>
          <h1>Login Admin</h1>
          <input type="text" placeholder="Usuário" /><br/>
          <input type="password" placeholder="Senha" /><br/>
          <button onClick={handleLogin}>Entrar</button>
        </div>
      ) : (
        <div>
          <h1>Painel Admin</h1>
          <p>Vendas recentes aparecerão aqui.</p>
          <h2>Reabastecer CPFs</h2>
          <textarea rows="5" cols="40" placeholder="Cole CPFs aqui..."></textarea><br/>
          <button>Salvar</button>
        </div>
      )}
    </main>
  );
}
