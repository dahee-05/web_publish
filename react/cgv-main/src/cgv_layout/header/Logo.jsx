

export default function Logo({href, src, text, target, alt}){
  return (
    <div class="header-top-logo">
      <a href={href} target={target}>
        <img src={src} alt={alt} />
      </a>
      <span>{text}</span>
    </div>
  );
}