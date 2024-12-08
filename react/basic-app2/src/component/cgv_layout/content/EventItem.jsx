export default function EventItem({src, alt, title, date}){
  return(
    <>
      <div>
        <img src={src} alt={alt} width="200px" />
      </div>
      <p class="event-content-title">{title}</p>
      <p class="event-content-title-date">{date}</p>
    </>
  );
}