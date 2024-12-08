

export default function HeaderTopMenu({href, src, alt, text}){
  return (
    <a href={href} target="_parent" class="header-menu-icon">
      <img src={src} alt={alt} />
      <span>&nbsp;&nbsp;{text}</span>
    </a>
  );
};