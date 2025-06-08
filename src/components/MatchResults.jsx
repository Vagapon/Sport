import React, { useEffect, useState } from 'react';
import { Calendar, Trophy, MapPin, Clock, Users, TrendingUp, Award, Star, X, Eye } from 'lucide-react';

function MatchResults() {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (match) => {
    setSelectedMatch(match);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMatch(null);
  };

  // Close modal when clicking outside or pressing ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const matches = [
    {
      id: 1,
      date: "July 18, 2018",
      time: "19:45",
      title: "Trận Đấu Kinh Điển",
      homeTeam: {
        name: "FC United",
        logo: "https://ext.same-assets.com/2224353730/163332264.png",
        stats: { possession: 58, shots: 14, corners: 7 }
      },
      awayTeam: {
        name: "Feyenoord",
        logo: "https://ext.same-assets.com/2224353730/157028534.png",
        stats: { possession: 42, shots: 11, corners: 4 }
      },
      score: "1 - 1",
      result: "draw",
      league: "Premier League",
      stadium: "Old Trafford",
      attendance: "74,879",
      highlights: ["Penalty saved in 78'", "Red card 85'", "Last minute equalizer"],
      status: "Completed"
    },
    {
      id: 2,
      date: "July 11, 2018",
      time: "20:00",
      title: "Chiến Thắng Ấn Tượng",
      homeTeam: {
        name: "FC United",
        logo: "https://ext.same-assets.com/2224353730/163332264.png",
        stats: { possession: 65, shots: 18, corners: 9 }
      },
      awayTeam: {
        name: "FC Manchester",
        logo: "https://ext.same-assets.com/2224353730/2642549229.png",
        stats: { possession: 35, shots: 8, corners: 3 }
      },
      score: "3 - 1",
      result: "win",
      league: "Premier League",
      stadium: "Emirates Stadium",
      attendance: "60,260",
      highlights: ["Hat-trick by Sterling", "Fantastic team play", "Dominant performance"],
      status: "Completed"
    },
    {
      id: 3,
      date: "July 25, 2018",
      time: "21:30",
      title: "Trận Cầu Kịch Tính",
      homeTeam: {
        name: "FC United",
        logo: "https://ext.same-assets.com/2224353730/163332264.png",
        stats: { possession: 52, shots: 16, corners: 6 }
      },
      awayTeam: {
        name: "FC Napoli",
        logo: "https://ext.same-assets.com/2224353730/2877012948.png",
        stats: { possession: 48, shots: 12, corners: 5 }
      },
      score: "2 - 3",
      result: "loss",
      league: "Premier League",
      stadium: "Stamford Bridge",
      attendance: "41,837",
      highlights: ["Amazing comeback", "Controversial VAR decision", "5 goals thriller"],
      status: "Completed"
    }
  ];

  const getResultColor = (result) => {
    switch(result) {
      case 'win': return 'from-green-600 to-emerald-700';
      case 'loss': return 'from-red-600 to-rose-700';
      case 'draw': return 'from-amber-600 to-orange-700';
      default: return 'from-gray-600 to-slate-700';
    }
  };

  const getResultIcon = (result) => {
    switch(result) {
      case 'win': return <Trophy className="w-5 h-5 text-white" />;
      case 'loss': return <TrendingUp className="w-5 h-5 rotate-180 text-white" />;
      case 'draw': return <Award className="w-5 h-5 text-white" />;
      default: return <Star className="w-5 h-5 text-white" />;
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 py-10 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-200/30 to-gray-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-slate-300/20 to-gray-200/25 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          {/* <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Kết Quả Trận Đấu
          </h2> */}
       <div className="text-center pt-8 border-t border-gray-200">
          <div className="inline-flex items-center space-x-3 bg-gray-50 border border-gray-200 rounded-lg px-6 py-3 shadow-sm">
            <Trophy className="w-5 h-5 text-gray-700" />
            <span className="text-base font-semibold text-gray-800">Theo dõi các trận đấu sắp tới</span>
          </div>
        </div>
        </div>

        {/* Match Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
          {matches.map((match, index) => (
            <div
              key={match.id}
              className="group bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Result Status Badge */}
              <div className={`h-1 bg-gradient-to-r ${getResultColor(match.result)}`}></div>
              
              <div className="p-6">
                {/* Date and Time */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{formatDate(match.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">{match.time}</span>
                  </div>
                </div>

                {/* Teams and Score */}
                <div className="flex items-center justify-between mb-6">
                  {/* Home Team */}
                  <div className="flex flex-col items-center space-y-3 flex-1">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 p-2 shadow-sm group-hover:scale-105 transition-transform duration-200">
                      <img
                        src={match.homeTeam.logo}
                        alt={match.homeTeam.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-gray-800 text-center text-sm leading-tight">
                      {match.homeTeam.name}
                    </span>
                  </div>

                  {/* Score */}
                  <div className="flex flex-col items-center mx-6">
                    <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${getResultColor(match.result)} rounded-lg shadow-sm mb-2`}>
                      {getResultIcon(match.result)}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 tracking-wide">
                      {match.score}
                    </div>
                  </div>

                  {/* Away Team */}
                  <div className="flex flex-col items-center space-y-3 flex-1">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 p-2 shadow-sm group-hover:scale-105 transition-transform duration-200">
                      <img
                        src={match.awayTeam.logo}
                        alt={match.awayTeam.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-gray-800 text-center text-sm leading-tight">
                      {match.awayTeam.name}
                    </span>
                  </div>
                </div>

                {/* League and Stadium */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Star className="w-4 h-4" />
                    <span className="font-semibold">{match.league}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{match.stadium}</span>
                  </div>
                </div>

                {/* Match Title */}
                <h4 className="text-lg font-bold text-center text-gray-800 mb-6 group-hover:text-gray-900 transition-colors">
                  {match.title}
                </h4>

                {/* View Details Button */}
                <button
                  onClick={() => openModal(match)}
                  className="w-full bg-gradient-to-r from-slate-800 to-gray-900 hover:from-slate-900 hover:to-black text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 group/btn shadow-lg"
                >
                  <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  <span>Xem Chi Tiết</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
    
      </div>

      {/* Modal */}
      {isModalOpen && selectedMatch && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${getResultColor(selectedMatch.result)} rounded-xl shadow-sm`}>
                    {getResultIcon(selectedMatch.result)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedMatch.title}</h3>
                    <p className="text-gray-500 text-sm">{formatDate(selectedMatch.date)} • {selectedMatch.time}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Teams and Score - Large Display */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  {/* Home Team */}
                  <div className="flex flex-col items-center space-y-4 flex-1">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white p-3 shadow-lg">
                      <img
                        src={selectedMatch.homeTeam.logo}
                        alt={selectedMatch.homeTeam.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 text-lg md:text-xl">{selectedMatch.homeTeam.name}</h4>
                      <p className="text-gray-500 text-sm">Chủ nhà</p>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="flex flex-col items-center mx-8 my-6 md:my-0">
                    <div className="text-4xl md:text-6xl font-bold text-gray-900 tracking-wide mb-2">
                      {selectedMatch.score}
                    </div>
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${getResultColor(selectedMatch.result)} rounded-lg`}>
                      <span className="text-white font-semibold text-sm capitalize">
                        {selectedMatch.result === 'win' ? 'Thắng' : selectedMatch.result === 'loss' ? 'Thua' : 'Hòa'}
                      </span>
                    </div>
                  </div>

                  {/* Away Team */}
                  <div className="flex flex-col items-center space-y-4 flex-1">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white p-3 shadow-lg">
                      <img
                        src={selectedMatch.awayTeam.logo}
                        alt={selectedMatch.awayTeam.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 text-lg md:text-xl">{selectedMatch.awayTeam.name}</h4>
                      <p className="text-gray-500 text-sm">Khách</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <Star className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Giải đấu</p>
                  <p className="font-bold text-gray-900">{selectedMatch.league}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Sân vận động</p>
                  <p className="font-bold text-gray-900">{selectedMatch.stadium}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Khán giả</p>
                  <p className="font-bold text-gray-900">{selectedMatch.attendance}</p>
                </div>
              </div>

              {/* Detailed Stats */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6">
                <h5 className="text-xl font-bold text-gray-900 mb-6 text-center">Thống Kê Chi Tiết</h5>
                
                {/* Possession */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-900 text-sm md:text-base">{selectedMatch.homeTeam.name}</span>
                    <span className="text-sm text-gray-500 font-medium">Kiểm soát bóng</span>
                    <span className="font-semibold text-gray-900 text-sm md:text-base">{selectedMatch.awayTeam.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xl md:text-2xl font-bold text-gray-900 w-12 text-center">{selectedMatch.homeTeam.stats.possession}%</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000" 
                        style={{ width: `${selectedMatch.homeTeam.stats.possession}%` }}
                      ></div>
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-gray-900 w-12 text-center">{selectedMatch.awayTeam.stats.possession}%</span>
                  </div>
                </div>

                {/* Other Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4">
                    <h6 className="font-semibold text-gray-700 mb-4 text-center">Cú sút</h6>
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-gray-900">{selectedMatch.homeTeam.stats.shots}</div>
                        <div className="text-xs text-gray-500">{selectedMatch.homeTeam.name}</div>
                      </div>
                      <div className="text-gray-400 font-bold">VS</div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-gray-900">{selectedMatch.awayTeam.stats.shots}</div>
                        <div className="text-xs text-gray-500">{selectedMatch.awayTeam.name}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4">
                    <h6 className="font-semibold text-gray-700 mb-4 text-center">Phạt góc</h6>
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-gray-900">{selectedMatch.homeTeam.stats.corners}</div>
                        <div className="text-xs text-gray-500">{selectedMatch.homeTeam.name}</div>
                      </div>
                      <div className="text-gray-400 font-bold">VS</div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-gray-900">{selectedMatch.awayTeam.stats.corners}</div>
                        <div className="text-xs text-gray-500">{selectedMatch.awayTeam.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
                  Điểm Nhấn Trận Đấu
                </h5>
                <div className="space-y-4">
                  {selectedMatch.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{idx + 1}</span>
                      </div>
                      <p className="text-gray-700 font-medium flex-1">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MatchResults;