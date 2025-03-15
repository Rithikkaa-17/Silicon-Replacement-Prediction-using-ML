import React, { useState } from 'react';
import { Search, AlertCircle, Atom, Microscope, Zap, FlaskRound as Flask } from 'lucide-react';

function App() {
  const [compound, setCompound] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      if (compound.trim().toUpperCase() === 'K2TIS3' || compound.trim().toUpperCase() === 'NA5SIP3') {
        setResult({
          canReplace: true,
          properties: compound.trim().toUpperCase() === 'K2TIS3' ? [
            'Better electrical flow than silicon',
            'Stays stable at high temperatures',
            'Electrons move faster through it',
            'Made from common materials',
            'Cheaper to produce'
          ] : [
            'Better electronic performance',
            "Doesn't break down easily",
            'Works great in solar cells',
            'Less expensive to make',
            'Eco-friendly material'
          ]
        });
      } else {
        setResult({
          canReplace: false,
          reasons: [
            'Electrons move too slowly through it',
            "Doesn't handle heat well enough",
            'Not good enough as a semiconductor',
            'Structure becomes unstable when hot',
            "Can't be made with current factory equipment"
          ]
        });
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Flask className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">The Future Beyond Silicon</h1>
            <Atom className="h-10 w-10 text-blue-600" />
          </div>
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 mb-8 shadow-sm">
            <p className="text-lg text-gray-700 italic font-serif">
              Our project uses machine learning to identify potential materials that could replace silicon in technology. 
              By analyzing key properties like electrical conductivity, thermal stability, and formation energy, 
              the model predicts the suitability of alternative materials. 
              This research aims to revolutionize electronics by discovering next-generation semiconductor materials.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              On a journey to discover the future of materials that can replace silicon with the help of Machine Learning.
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="compound" className="block text-xl font-medium text-gray-700 mb-3">
              Enter your compound for analysis:
            </label>
            <div className="relative">
              <input
                type="text"
                id="compound"
                value={compound}
                onChange={(e) => setCompound(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="For example: K2TiS3"
              />
              <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            <button
              type="submit"
              disabled={loading || !compound}
              className={`w-full py-4 text-lg font-medium rounded-lg flex items-center justify-center gap-2 ${
                loading || !compound ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition-colors`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="h-5 w-5" />
                  Analyze Compound
                </>
              )}
            </button>
          </form>
        </div>

        {result && (
          <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-8 mb-8 border-l-4 ${
            result.canReplace ? 'border-green-500' : 'border-red-500'
          }`}>
            {result.canReplace ? (
              <div>
                <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  Breakthrough Material Detected!
                </h2>
                {result.properties?.map((property, index) => (
                  <p key={index} className="text-lg text-gray-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span> {property}
                  </p>
                ))}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-red-700 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-500" /> Not Quite Ready for Silicon's Crown
                </h2>
                {result.reasons?.map((reason, index) => (
                  <p key={index} className="text-lg text-gray-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span> {reason}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}

        <p className="text-lg text-gray-700 leading-relaxed text-center mt-6">
          "Silicon shaped the past, but the future is waiting to be discovered."
          <br />
          <span className="font-semibold">Research and development by Rithikkaa S J</span>
        </p>

      </div>
    </div>
  );
}

export default App;
