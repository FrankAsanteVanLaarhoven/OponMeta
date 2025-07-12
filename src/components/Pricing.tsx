import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    features: [
      'Access to selected digital courses',
      'Community forum participation',
      'Monthly newsletter and event invites',
    ],
    cta: 'Join Free',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$19/mo',
    features: [
      'Full access to all learning modules',
      'Live and recorded workshops',
      'Mentorship programme access',
      'Course completion certificates',
    ],
    cta: 'Start Professional',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$39/mo',
    features: [
      '1-on-1 mentorship sessions',
      'Personalized learning path',
      'Career coaching and resume reviews',
      'Exclusive partner opportunities',
    ],
    cta: 'Go Premium',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Team onboarding and admin dashboard',
      'Progress tracking and analytics',
      'Custom workshops and branded content',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const Pricing = () => (
  <section className="w-full bg-[#f6f9fc] py-16 px-4 border-b border-gray-100">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0a174e] mb-2">Flexible Plans for Every Learner</h2>
      <div className="w-16 h-1 bg-indigo-400 mx-auto mb-8 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className={`rounded-lg p-8 shadow-sm flex flex-col items-center bg-white border-2 ${plan.highlight ? 'border-[#FFD700] scale-105' : 'border-gray-100'}`}>
            <h3 className="text-xl font-bold text-[#0a174e] mb-2">{plan.name}</h3>
            <div className="text-3xl font-extrabold mb-4" style={plan.highlight ? { color: '#FFD700' } : {}}>{plan.price}</div>
            <ul className="mb-6 text-gray-700 text-left space-y-2">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center"><span className="mr-2 text-indigo-400">•</span>{f}</li>
              ))}
            </ul>
            <button className={`w-full py-2 rounded font-bold transition ${plan.highlight ? 'bg-[#FFD700] text-[#0a174e] hover:bg-yellow-300' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>{plan.cta}</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing; 