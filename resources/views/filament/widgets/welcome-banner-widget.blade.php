@php
    $greeting   = $this->getGreeting();
    $icon       = $this->getGreetingIcon();
    $name       = $this->getUserName();
    $roleLabel  = $this->getRoleLabel();
    $role       = $this->getRole();
    $today      = $this->getToday();
    $quickStats = $this->getQuickStats();

    $roleColors = [
        'root'     => ['from' => '#7c3aed', 'to' => '#4f46e5', 'badge_bg' => 'rgba(255,255,255,0.2)', 'badge_border' => 'rgba(255,255,255,0.35)'],
        'admin'    => ['from' => '#f59e0b', 'to' => '#b45309', 'badge_bg' => 'rgba(255,255,255,0.2)', 'badge_border' => 'rgba(255,255,255,0.35)'],
        'penulis'  => ['from' => '#059669', 'to' => '#065f46', 'badge_bg' => 'rgba(255,255,255,0.2)', 'badge_border' => 'rgba(255,255,255,0.35)'],
        'reviewer' => ['from' => '#0284c7', 'to' => '#075985', 'badge_bg' => 'rgba(255,255,255,0.2)', 'badge_border' => 'rgba(255,255,255,0.35)'],
    ];

    $key    = $role?->value ?? 'admin';
    $colors = $roleColors[$key] ?? $roleColors['admin'];
@endphp

<style>
    .wb-banner {
        position: relative;
        overflow: hidden;
        border-radius: 1rem;
        background: linear-gradient(135deg, {{ $colors['from'] }} 0%, {{ $colors['to'] }} 100%);
        padding: 2rem 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        box-shadow: 0 10px 40px -10px {{ $colors['from'] }}80;
        flex-wrap: wrap;
    }

    .wb-banner::before {
        content: '';
        position: absolute;
        top: -60px; right: -60px;
        width: 220px; height: 220px;
        border-radius: 50%;
        background: rgba(255,255,255,0.06);
        pointer-events: none;
    }

    .wb-banner::after {
        content: '';
        position: absolute;
        bottom: -80px; right: 160px;
        width: 280px; height: 280px;
        border-radius: 50%;
        background: rgba(255,255,255,0.04);
        pointer-events: none;
    }

    .wb-left { display: flex; flex-direction: column; gap: 0.35rem; z-index: 1; }

    .wb-greeting {
        font-size: 0.875rem;
        font-weight: 500;
        color: rgba(255,255,255,0.8);
        letter-spacing: 0.02em;
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    .wb-name {
        font-size: 1.75rem;
        font-weight: 700;
        color: #ffffff;
        line-height: 1.2;
        letter-spacing: -0.02em;
    }

    .wb-role-row {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin-top: 0.2rem;
    }

    .wb-role-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.2rem 0.75rem;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 600;
        color: rgba(255,255,255,0.95);
        background: {{ $colors['badge_bg'] }};
        border: 1px solid {{ $colors['badge_border'] }};
        backdrop-filter: blur(4px);
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }

    .wb-date {
        font-size: 0.82rem;
        color: rgba(255,255,255,0.65);
        margin-top: 0.1rem;
    }

    .wb-right {
        display: flex;
        gap: 1rem;
        z-index: 1;
        flex-wrap: wrap;
    }

    .wb-stat-card {
        background: rgba(255,255,255,0.12);
        border: 1px solid rgba(255,255,255,0.2);
        backdrop-filter: blur(8px);
        border-radius: 0.75rem;
        padding: 0.875rem 1.25rem;
        text-align: center;
        min-width: 90px;
        transition: background 0.2s ease;
    }

    .wb-stat-card:hover {
        background: rgba(255,255,255,0.18);
    }

    .wb-stat-value {
        font-size: 1.625rem;
        font-weight: 700;
        color: #ffffff;
        line-height: 1;
    }

    .wb-stat-label {
        font-size: 0.72rem;
        color: rgba(255,255,255,0.7);
        margin-top: 0.3rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        white-space: nowrap;
    }

    @media (max-width: 640px) {
        .wb-banner { padding: 1.5rem; }
        .wb-name { font-size: 1.35rem; }
        .wb-right { gap: 0.625rem; }
        .wb-stat-card { min-width: 70px; padding: 0.625rem 0.875rem; }
        .wb-stat-value { font-size: 1.3rem; }
    }
</style>

<div class="wb-banner">
    {{-- Left: Greeting --}}
    <div class="wb-left">
        <div class="wb-greeting">
            <span>{{ $icon }}</span>
            <span>{{ $greeting }}</span>
        </div>
        <div class="wb-name">{{ $name }}</div>
        <div class="wb-role-row">
            <span class="wb-role-badge">
                ✦ {{ $roleLabel }}
            </span>
        </div>
        <div class="wb-date">{{ $today }}</div>
    </div>

    {{-- Right: Quick Stats --}}
    @if(count($quickStats))
        <div class="wb-right">
            @foreach($quickStats as $stat)
                <div class="wb-stat-card">
                    <div class="wb-stat-value">{{ $stat['value'] }}</div>
                    <div class="wb-stat-label">{{ $stat['label'] }}</div>
                </div>
            @endforeach
        </div>
    @endif
</div>
