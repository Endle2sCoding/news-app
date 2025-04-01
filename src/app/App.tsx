import { MainPage } from "@/pages/MainPage";
import { Header } from "@/sections/Header";
import { Container } from "@/shared/ui/Container/Container";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <MainPage />
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
