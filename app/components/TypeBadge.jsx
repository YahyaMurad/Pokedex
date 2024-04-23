interface BadgeProps {
  color: string;
  content: string;
}

const Badge: React.FC<BadgeProps> = ({ color, content }) => {
  return (
    <span className="badge badge-outline p-3 mr-3" style={{ color: color }}>
      {content}
    </span>
  );
};

export default Badge;
