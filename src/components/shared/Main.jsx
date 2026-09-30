const Main = ({ children }) => {
  return (
    <main className="bg-gray-50 p-6">
      <div className="bg-white rounded-lg shadow-md h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
};

export default Main;
