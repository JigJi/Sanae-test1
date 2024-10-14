import React from 'react';

interface FlagIconProps {
  country: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({ country }) => {
  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return <span className="text-2xl">{getFlagEmoji(country)}</span>;
};

export default FlagIcon;