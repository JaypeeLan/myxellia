'use client';

const BudgetModal = ({
  isBudgetModalOpen,
  setIsBudgetModalOpen,
}: {
  isBudgetModalOpen: boolean;
  setIsBudgetModalOpen: (state: boolean) => void;
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isBudgetModalOpen ? 'visible' : 'invisible'
      }`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 
    ${isBudgetModalOpen ? 'bg-black/50' : 'bg-transparent'}
  `}
        onClick={() => setIsBudgetModalOpen(false)}
      />
      <div
        className={`relative bg-white rounded-3xl p-8 m-4 max-w-md w-full transform transition-all duration-300 ${
          isBudgetModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="bg-slate-800 rounded-2xl p-12 mb-8 flex justify-center">
          <div className="bg-white rounded-2xl p-4">
            <div className="bg-slate-800 rounded-lg p-3">
              <div className="bg-white rounded px-3 py-1 mb-2"></div>
              <div className="grid grid-cols-3 gap-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Set up annual budgets by account category
        </h2>

        <p className="text-gray-600 mb-8 text-center">
          Allocate funds across income and expense lines with full visibility.
        </p>

        <div className="space-y-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-100 rounded-lg p-3 mt-1">
              <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Track actuals vs budget in real time
              </h3>
              <p className="text-gray-600 text-sm">
                See how your community is performing against plan, month by
                month.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gray-100 rounded-lg p-3 mt-1">
              <div className="w-6 h-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-full h-full text-gray-400"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <rect x="7" y="7" width="3" height="9" />
                  <rect x="14" y="7" width="3" height="5" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Adjust figures and forecast with ease
              </h3>
              <p className="text-gray-600 text-sm">
                Edit amounts, apply percentage changes, or roll forward last
                year's data—all in one place.
              </p>
            </div>
          </div>
        </div>

        <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-colors">
          Create Budget
        </button>
      </div>
    </div>
  );
};

export default BudgetModal;
