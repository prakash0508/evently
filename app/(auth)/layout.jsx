export default function RootLayout({ children }) {
  return (
    <div className="flex justify-center content-center flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      {children}  
    </div>
  );
}
