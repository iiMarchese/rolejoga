import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBe9NDr-hbJsDvyvR49MXRD4gD5u3RE4No",
  authDomain: "jogo-da-memoria-8c29d.firebaseapp.com",
  projectId: "jogo-da-memoria-8c29d",
  storageBucket: "jogo-da-memoria-8c29d.appspot.com",
  messagingSenderId: "209962894494",
  appId: "1:209962894494:web:d6215f7a8d63a94e0d678f",
  measurementId: "G-HJ15X9C9RE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Função para salvar a pontuação no Firestore
export async function salvarPontuacao(nome, pontos) {
  try {
    await addDoc(collection(db, "pontuacoes"), {
      nome: nome,
      pontos: pontos,
      data: new Date()
    });
    console.log("Pontuação salva!");
  } catch (e) {
    console.error("Erro ao salvar a pontuação: ", e);
  }
}