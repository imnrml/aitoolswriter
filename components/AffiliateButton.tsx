interface AffiliateButtonProps {
  text: string;
  link: string;
  color?: string;
}

export default function AffiliateButton({ 
  text, 
  link, 
  color = "bg-blue-600 hover:bg-blue-700" 
}: AffiliateButtonProps) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-block px-6 py-3 text-white font-semibold rounded-lg transition-colors ${color}`}
    >
      {text}
    </a>
  );
}