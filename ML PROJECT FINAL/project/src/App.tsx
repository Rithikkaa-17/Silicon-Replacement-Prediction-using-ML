import React, { useState } from 'react';
import { Search, AlertCircle, Atom, Microscope, Zap, FlaskRound as Flask, Info, CheckCircle, XCircle } from 'lucide-react';

function App() {
  const [compound, setCompound] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    canReplace: boolean;
    properties?: string[];
    disadvantages?: string[];
    remedies?: string[];
    reasons?: string[];
  } | null>(null);

  const compounds = {
    'K2TIS3': {
      advantages: [
        'Revolutionary titanium-sulfur bonding creates exceptional semiconductor properties',
        'Superior visible light absorption spectrum compared to traditional materials',
        'Eco-friendly synthesis process with 40% lower production costs',
        'Unique layered structure enables flexible device applications'
      ],
      disadvantages: [
        'Moisture sensitivity can lead to performance degradation over time',
        'Limited real-world performance data in commercial applications',
        'Current fabrication methods need scaling optimization'
      ],
      remedies: [
        'Advanced hydrophobic coating technology for moisture protection',
        'Accelerated aging tests to validate long-term stability',
        'Industrial-scale production process development'
      ]
    },
    'KGECL3': {
      advantages: [
        'Revolutionary quantum efficiency exceeding 30% in laboratory conditions',
        'Precise bandgap engineering capabilities through composition control',
        'Exceptional performance in low-light conditions',
        'Compatible with existing thin-film manufacturing processes'
      ],
      disadvantages: [
        'Chemical instability due to chlorine content affects device longevity',
        'High material costs due to germanium scarcity',
        'Complex synthesis requirements'
      ],
      remedies: [
        'Novel chlorine-free synthesis pathways under development',
        'Strategic germanium recycling programs to reduce costs',
        'Simplified manufacturing protocols through process optimization'
      ]
    },
    'LI5TIN3': {
      advantages: [
        'Breakthrough thermal stability up to 800°C for extreme environments',
        'Ultra-high carrier mobility exceeding silicon by 200%',
        'Pioneering thin-film architecture possibilities',
        'Exceptional power-to-weight ratio for aerospace applications'
      ],
      disadvantages: [
        'Insufficient data on long-term performance metrics',
        'Lithium stability issues in humid conditions',
        'Complex integration with existing electronics'
      ],
      remedies: [
        'Comprehensive performance modeling using quantum simulations',
        'Advanced encapsulation techniques for moisture protection',
        'Development of specialized manufacturing protocols'
      ]
    },
    'MG3BN3': {
      advantages: [
        'Unprecedented thermal conductivity for better heat management',
        'Customizable bandgap from 1.0 to 3.5 eV',
        'Industry-first transparent solar cell capabilities',
        'Environmentally friendly composition'
      ],
      disadvantages: [
        'Lower electrical conductivity compared to silicon',
        'Manufacturing complexity requires specialized equipment',
        'Temperature-dependent performance variations'
      ],
      remedies: [
        'Novel doping strategies using transition metals',
        'Automated production line development',
        'Temperature compensation circuits integration'
      ]
    },
    'NA5SIP3': {
      advantages: [
        'Groundbreaking silicon-phosphorus hybrid structure',
        'Adaptive bandgap behavior for maximum solar spectrum utilization',
        'Cost-effective raw materials and processing',
        'Compatible with existing silicon manufacturing infrastructure'
      ],
      disadvantages: [
        'Limited research data on long-term stability',
        'Oxidation sensitivity in ambient conditions',
        'Performance variability between batches'
      ],
      remedies: [
        'Advanced computational modeling for performance prediction',
        'Innovative surface passivation techniques',
        'Standardized quality control protocols'
      ]
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      const upperCompound = compound.trim().toUpperCase();
      if (compounds[upperCompound]) {
        setResult({
          canReplace: true,
          properties: compounds[upperCompound].advantages,
          disadvantages: compounds[upperCompound].disadvantages,
          remedies: compounds[upperCompound].remedies
        });
      } else {
        setResult({
          canReplace: false,
          reasons: [
            'Electrons move too slowly through it',
            'Doesn\'t handle heat well enough',
            'Not good enough as a semiconductor',
            'Structure becomes unstable when hot',
            'Can\'t be made with current factory equipment'
          ]
        });
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Flask className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              The Future Beyond Silicon
            </h1>
            <Atom className="h-10 w-10 text-blue-600" />
          </div>
          <p className="text-gray-600">Developed by Rithikkaa S J</p>
        </div>

        {/* Analysis Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="compound"
                className="block text-xl font-medium text-gray-700 mb-3"
              >
                Enter your compound for analysis:
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="compound"
                  value={compound}
                  onChange={(e) => setCompound(e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="K2TiS3, KGeCl3, Li5TiN3, Mg3BN3, or Na5SiP3"
                />
                <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !compound}
              className={`w-full py-4 text-lg font-medium rounded-lg flex items-center justify-center gap-2 ${
                loading || !compound
                  ? 'bg-gray-400'
                  : 'bg-blue-600 hover:bg-blue-700'
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

        {/* Results Display */}
        {result && (
          <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-8 mb-8 border-l-4 ${
            result.canReplace ? 'border-green-500' : 'border-red-500'
          }`}>
            {result.canReplace ? (
              <div>
                <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  Promising Alternative to Silicon!
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Advantages
                    </h3>
                    <div className="space-y-2">
                      {result.properties?.map((property, index) => (
                        <p key={index} className="text-gray-700 flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          {property}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      Challenges
                    </h3>
                    <div className="space-y-2">
                      {result.disadvantages?.map((disadvantage, index) => (
                        <p key={index} className="text-gray-700 flex items-start gap-2">
                          <span className="text-amber-500 mt-1">!</span>
                          {disadvantage}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Info className="h-5 w-5 text-blue-500" />
                      Potential Solutions
                    </h3>
                    <div className="space-y-2">
                      {result.remedies?.map((remedy, index) => (
                        <p key={index} className="text-gray-700 flex items-start gap-2">
                          <span className="text-blue-500 mt-1">→</span>
                          {remedy}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-bold text-red-700">
                    Not Viable as a Silicon Replacement
                  </h2>
                </div>
                <div className="space-y-3">
                  {result.reasons?.map((reason, index) => (
                    <p key={index} className="text-gray-700 flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      {reason}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Why Silicon Dominates */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Microscope className="h-6 w-6 text-blue-600" />
            Why Silicon Remains Dominant
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-semibold">Mature Technology:</span> Decades of research and industrial scale-up
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Abundant and Low-cost:</span> Unlike rare elements, silicon is widely available
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">High Efficiency:</span> Monocrystalline silicon cells reach &gt;26% efficiency
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-semibold">Proven Stability:</span> Works for 25+ years, unlike experimental materials
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Manufacturing Infrastructure:</span> Billions invested in silicon-based fabrication
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Industry Standard:</span> Established quality control and certification processes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;