import '../History/styles.css'

export function History({data, backgroundColor}){
    return(
        <>
           <section>
               <h3>Histórico de cores geradas:</h3>

               <ul>
                   {data.map((rgb) => (
                       <li key={rgb.join()}>
                           <div className="small-preview" style={{
                               backgroundColor: backgroundColor(...rgb)
                           }}></div>
                           {rgb.join(", ")}
                       </li>
                   ))}
               </ul>
           </section>
        </>
    );
}