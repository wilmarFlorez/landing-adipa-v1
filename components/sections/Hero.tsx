import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="flex min-h-[400px] items-center bg-gradient-to-br from-primary to-secondary md:min-h-[500px]">
      <Container>
        <div className="py-16 text-center md:py-24">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white text-balance md:text-5xl lg:text-6xl">
            Formación continua en Psicología y Salud Mental
          </h1>

          <p className="font-body mx-auto mt-5 max-w-2xl text-lg text-white/90 md:text-xl">
            Aprende con los mejores especialistas de Chile y Latinoamérica.
            Cursos online, en vivo y presenciales diseñados para tu desarrollo profesional.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" className="shadow-lg shadow-black/20 w-full sm:w-auto">
              Explorar cursos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="!border-white !text-white hover:!bg-white/20 w-full sm:w-auto"
            >
              Ver diplomados
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
