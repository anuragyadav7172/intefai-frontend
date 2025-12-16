import Container from "./Container";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-24">
      <Container className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} IntefAI. All rights reserved.</p>
        <p className="text-white/40">Built with AI-driven innovation</p>
      </Container>
    </footer>
  );
};

export default Footer;
