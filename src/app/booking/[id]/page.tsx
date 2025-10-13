import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const BookingPage: React.FC<PageProps> = ({ params }) => {
  const { id } = params;

  const cards = [
    { id: 1, name: "Aries", date: "Mar 21 - Apr 19" },
    { id: 2, name: "Taurus", date: "Apr 20 - May 20" },
    { id: 3, name: "Gemini", date: "May 21 - Jun 20" },
    { id: 4, name: "Cancer", date: "Jun 21 - Jul 22" },
    { id: 5, name: "Leo", date: "Jul 23 - Aug 22" },
    { id: 6, name: "Virgo", date: "Aug 23 - Sep 22" },
    { id: 7, name: "Libra", date: "Sep 23 - Oct 22" },
    { id: 8, name: "Scorpio", date: "Oct 23 - Nov 21" },
    { id: 9, name: "Sagittarius", date: "Nov 22 - Dec 21" },
    { id: 10, name: "Capricorn", date: "Dec 22 - Jan 19" },
    { id: 11, name: "Aquarius", date: "Jan 20 - Feb 18" },
    { id: 12, name: "Pisces", date: "Feb 19 - Mar 20" },
  ];

  // Convert id to number for correct comparison
  const card = cards.find((c) => c.id === Number(id));

  return (
    <div className="p-8 text-center min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Hello!</h1>
      {card ? (
        <div>
          <p className="text-lg">You selected: {card.name}</p>
          <p className="text-md text-gray-600">{card.date}</p>
        </div>
      ) : (
        <p className="text-lg text-red-500">Card not found</p>
      )}
    </div>
  );
};

export default BookingPage;
