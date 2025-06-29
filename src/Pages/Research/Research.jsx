import React from "react";

const Research = () => {
  return (
    <div className="pb-10 w-9/12 mx-auto">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-[28px] sm:text-[28px] lg:text-[28px] font-semibold text-[#263040] relative inline-block group">
          Research and Publication
          <span className="absolute left-0 -bottom-1 h-[2px] bg-[#263040] w-0 transition-all duration-500 group-hover:w-full"></span>
        </h2>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-[#1B2432] mb-1">
          Ensemble Machine Learning for Enhanced Breast Cancer Prediction: A Comparative Study
        </h3>
        <p className="text-sm text-gray-600 italic">
          Published in IJACSA (International Journal of Advanced Computer Science and Applications), Vol. 15, No. 7, 2024
        </p>
        <p className="mt-2 text-gray-700">
          Conducted an academic study applying ensemble machine learning techniques to improve breast cancer detection accuracy.
          The research compared models including Random Forest, Gradient Boosting, and Voting Classifiers to find the most effective approach.
        </p>
        <a
          href="https://dx.doi.org/10.14569/IJACSA.2024.0150792"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline text-sm"
        >
          View Publication
        </a>
      </div>

      
    </div>
  );
};

export default Research;
