function BottomBar() {

    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/viktoria-björklund/",  "_blank");
    };

    const handleContactClick = () => {
        // Open the mail client when 'Contact' is clicked
        window.location.href = "mailto:viktoriabjorklund99@gmail.com";
    };

    return (

        <div
            className="relative w-full bg-cover bg-center text-center text-white py-12 px-4"
  
        >
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.3)_70%,transparent_100%)]"></div>
        <div className="relative z-10">
        <div className="w-3/4 h-px bg-white mx-auto mb-6"></div>
        <p className="text-2xl font-bold mb-6">want to get in touch?</p>
        
  
        <div className="flex justify-center gap-8 mb-8">
            <div class="cursor-pointer transition transform hover:scale-110" onClick={handleLinkedInClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24">
                    <path fill="white" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </div>

            <div class="cursor-pointer transition transform hover:scale-110" onClick={handleContactClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
            </div>

        </div>
  
        {/* Fun fact */}
        <span className="font-semibold">Fun fact!</span> 
        <p className="max-w-xl mx-auto mb-4">
          The background image is a
          photo of Skellig Michael which I photographed during a roadtrip in
          Ireland.
        </p>
  
        {/* Footer-credit */}
        <p className="font-bold text-sm opacity-80 mt-10 text-amber-300">Developed by Viktoria Björklund</p>
      </div>
      </div>
    );
  }
  
  export default BottomBar;
  