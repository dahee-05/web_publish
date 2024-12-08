export default function Logo({href, target, src, alt}){
  return (
    <>
    <div class="header-top-logo">
      <a href={href} target={target}>
        <img src={src} alt={alt} />
      </a>
      <span>DEEP DIVE SAPCE</span>
    </div>
    </>
  );
};