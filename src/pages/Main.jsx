import React, { useState, useEffect } from 'react';

function Main() {
  const [continents, setContinents] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      // Fetch data with pop=1 parameter to get all continents including popular
      const response = await fetch("https://api.withseamless.com/web-country-list", {
        headers: {
          "accept": "application/json, text/plain, */*",
          "api-key": "c4ba26d8-92cd-49ff-972a-3daab64b64cf"
        },
        method: "GET"
      });
      
      const data = await response.json();
      if (data && data.length > 0) {
        setContinents(data);
        // Flatten all countries for search and remove duplicates based on country ID
        const allCountriesList = data.flatMap(continent => 
          continent.countries.map(country => ({
            ...country,
            continent: continent.continent
          }))
        );
        
        // Remove duplicates - keep only unique countries by ID
        const uniqueCountries = allCountriesList.reduce((acc, country) => {
          if (!acc.find(c => c.id === country.id)) {
            acc.push(country);
          }
          return acc;
        }, []);
        
        setAllCountries(uniqueCountries);
        setFilteredCountries([]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching countries:', error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      // Reset to show all countries by continent
      setFilteredCountries([]);
    } else {
      // Filter countries for search
      const filtered = allCountries.filter(country =>
        country.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  const getFlagEmoji = (countryCode) => {
    if (!countryCode) return '🌍';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  const renderCountries = () => {
    if (searchTerm && filteredCountries.length >= 0) {
      // Show filtered search results
      return (
        <div>
          <h2 className="text-neutral-900 mb-4 text-lg font-semibold">
            Search Results ({filteredCountries.length})
          </h2>
          {filteredCountries.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              No countries found matching "{searchTerm}"
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {filteredCountries.map((country) => (
                <button
                  key={country.id}
                  className="w-full bg-neutral-50 hover:bg-neutral-100 rounded-xl p-3 flex items-center gap-3 transition-colors text-left">
                  <div className="text-2xl flex-shrink-0">
                    {getFlagEmoji(country.country_code)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-neutral-900 truncate font-medium">
                      {country.name}
                    </div>
                    <div className="text-xs text-neutral-500">
                      From {Math.round(country.package?.sale_price_pkr || 0)} PKR
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="w-4 h-4 text-neutral-400 flex-shrink-0">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Show all continents
    return (
      <div className="space-y-8">
        {continents.map((continent, index) => (
          <div key={index}>
            <h2 className="text-neutral-900 mb-4 text-lg font-semibold">
              {continent.continent}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {continent.countries.map((country) => (
                <button
                  key={country.id}
                  className="w-full bg-neutral-50 hover:bg-neutral-100 rounded-xl p-3 flex items-center gap-3 transition-colors text-left">
                  <div className="text-2xl flex-shrink-0">
                    {getFlagEmoji(country.country_code)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-neutral-900 truncate font-medium">
                      {country.name}
                    </div>
                    <div className="text-xs text-neutral-500">
                      From {Math.round(country.package?.sale_price_pkr || 0)} PKR
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="w-4 h-4 text-neutral-400 flex-shrink-0">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-6 pb-8">
        <div className="text-center mb-6">
          <h1 className="text-neutral-900 mb-2 text-2xl font-semibold">Pick a data plan for your trip</h1>
          <p className="text-neutral-600">Choose your destination</p>
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400">
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input 
              type="text" 
              value={searchTerm}
              onChange={handleSearch}
              className="flex w-full min-w-0 border px-3 py-1 text-base outline-none pl-12 h-12 bg-neutral-50 border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Here..." 
            />
          </div>
        </div>
        
        <div className="relative h-[calc(100vh-240px)] overflow-y-auto">
          <div className="pr-4">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-neutral-500">Loading countries...</div>
              </div>
            ) : (
              renderCountries()
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;