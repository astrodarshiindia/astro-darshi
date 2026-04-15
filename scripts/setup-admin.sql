-- Setup default admin user for Astro Darshi
-- Email: admin@astroDarshi.com
-- Password: admin123 (hashed with SHA256)

INSERT INTO admin_users (email, password_hash, name, role, is_active)
VALUES (
  'admin@astroDarshi.com',
  '8d969eef6ecad3c29a3a629280e3193e4e3f2c7f3e2e8b5c4d7e6f8a9b0c1d2e',  -- SHA256 of 'admin123'
  'Admin User',
  'superadmin',
  true
)
ON CONFLICT (email) DO NOTHING;

-- Create initial session table index if missing
CREATE INDEX IF NOT EXISTS idx_admin_sessions_token ON admin_sessions(token);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_expires ON admin_sessions(expires_at) WHERE expires_at > NOW();

