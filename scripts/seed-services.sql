-- Seed default services (run once in Supabase SQL Editor)
INSERT INTO services (title, slug, description, long_description, duration, price, features, is_active, order_index)
VALUES
  (
    'Janm Kundli',
    'kundli',
    'Complete birth chart analysis for life path, career, marriage and health.',
    'A detailed Janm Kundli reading covering planetary positions, house strengths, Dasha periods, and personalised remedies for the year ahead.',
    '60–75 min',
    1500,
    '["Planetary positions & house analysis","Dasha predictions for 12–24 months","Career, marriage & health timing","Personalised remedies"]'::jsonb,
    true,
    1
  ),
  (
    'Prashna Kundli',
    'prashna',
    'Horary astrology for urgent questions — no birth details needed.',
    'Ask a specific question and receive an answer based on the chart cast at the moment of inquiry. Ideal for time-sensitive decisions.',
    '30–45 min',
    800,
    '["Urgent life & relationship answers","No birth chart required","Travel, job & finance decisions","Quick horary timing"]'::jsonb,
    true,
    2
  ),
  (
    'Tarot Reading',
    'tarot',
    'Intuitive card spreads for clarity on relationships, career and purpose.',
    'Deep tarot spreads revealing current energy, obstacles, and practical next steps for your situation.',
    '45–60 min',
    1200,
    '["Current energy & obstacles","Relationship & career clarity","Future possibilities","Actionable guidance"]'::jsonb,
    true,
    3
  ),
  (
    'Vastu Consultation',
    'vastu',
    'Home and office Vastu guidance without major structural changes.',
    'Practical Vastu remedies for better health, wealth and harmony — layout optimisation for rooms, doors and workplace flow.',
    '60 min',
    2000,
    '["Home & office Vastu","No demolition remedies","Health & wealth harmony","Door & room optimisation"]'::jsonb,
    true,
    4
  ),
  (
    'Gemstone Consultation',
    'gemstone',
    'Chart-based gemstone recommendations with lab-certified stones.',
    'Personalised gemstone guidance to strengthen favourable planets — includes Astro Mall catalog for certified stones.',
    '45 min',
    1000,
    '["Chart-based stone selection","Lab-certified gemstones","Confidence & career support","Wearing guidance"]'::jsonb,
    true,
    5
  ),
  (
    'Kundli Matching',
    'matchmaking',
    'Partner compatibility with Guna Milan, Manglik checks and remedies.',
    'Full matchmaking analysis for long-term marriage success including Guna Milan score and relationship stability advice.',
    '60 min',
    1500,
    '["Guna Milan scoring","Manglik & Nadi checks","Long-term compatibility","Remedies & timing"]'::jsonb,
    true,
    6
  ),
  (
    'Matrimonial Services',
    'matrimonial',
    'Astrology-backed matrimonial profiling and verified partner matching.',
    'Submit your profile for astrology-backed matching with verified seekers aligned on family values and compatibility.',
    'Ongoing',
    2500,
    '["Profile registration","Astrology-backed matching","Family values alignment","Safe introductions"]'::jsonb,
    true,
    7
  ),
  (
    'Business Astrology',
    'business',
    'Business chart analysis for growth, partnerships and investment timing.',
    'Timing guidance for launches, contracts and investments plus remedies for financial and operational stability.',
    '75 min',
    3000,
    '["Business chart analysis","Launch & investment timing","Partnership evaluation","Financial stability remedies"]'::jsonb,
    true,
    8
  )
ON CONFLICT (slug) DO NOTHING;
