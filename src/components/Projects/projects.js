
const projects =  [
        {
          "id": 1,
          "name": "Portfolio",
          "languages": "React, Redux, Sass",
          link: "https://www.alerafart.com",
          "img": "/static/media/portfolio_alex.133f293c0bcece654318.png"
        },
        {
          "id": 2,
          name: "Joke Factory",
          "languages": "React, Redux, Sass, Axios",
          link: "https://www.jokefactory.alerafart.com/",
          "img": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgeG1sbnM6bnMxPSJodHRwOi8vc296aS5iYWllcm91Z2UuZnIiCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgIGlkPSJzdmcyMzI1IgogICAgc29kaXBvZGk6ZG9jbmFtZT0iYnVkZHlfbGF1Z2hpbmcuc3ZnIgogICAgdmlld0JveD0iMCAwIDE4MCAxODAiCiAgICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICAgdmVyc2lvbj0iMS4wIgogICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiCiAgICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogID4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgIGlkPSJiYXNlIgogICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwLjAiCiAgICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICAgZ3JpZHRvbGVyYW5jZT0iMTAuMCIKICAgICAgaW5rc2NhcGU6em9vbT0iMi41Nzc3Nzc4IgogICAgICBvYmplY3R0b2xlcmFuY2U9IjEwLjAiCiAgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMjMyNSIKICAgICAgaW5rc2NhcGU6Y3g9Ijk2LjUwMTYyMyIKICAgICAgaW5rc2NhcGU6Y3k9IjkwIgogICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjA3IgogICAgICBpbmtzY2FwZTp3aW5kb3cteD0iNTIwIgogICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI2NjAiCiAgICAgIHNob3dncmlkPSJmYWxzZSIKICAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSI2NTkiCiAgLz4KICA8ZwogICAgICBpZD0ibGF5ZXIxIgogICAgPgogICAgPGcKICAgICAgICBpZD0iZzI0NzQiCiAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjA3LjE0IDI0MCkiCiAgICAgID4KICAgICAgPHBhdGgKICAgICAgICAgIGlkPSJwYXRoMjE2NyIKICAgICAgICAgIHN0eWxlPSJmaWxsLW9wYWNpdHk6LjM5MjE2O2ZpbGw6IzAwMDAwMCIKICAgICAgICAgIGQ9Im0zNjcuODYgNjA0LjUxYTYxLjQyOSAxMy41NzEgMCAxIDEgLTEyMi44NiAwIDYxLjQyOSAxMy41NzEgMCAxIDEgMTIyLjg2IDB6IgogICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wOTMgMCAwIC44NDIxMCAtNDQ5LjU4IC01ODguMzEpIgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgICAgaWQ9InBhdGgyMTY5IgogICAgICAgICAgc3R5bGU9InN0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2U6IzAwMDAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Utd2lkdGg6Mi41O2ZpbGw6I2ZmZmZmZiIKICAgICAgICAgIGQ9Im0tMzguMzY3LTE1NC4wNGMwIDQ3LjU5LTQwLjIzNSA3Ny40NTQtODIuMjMzIDc3LjQ1NC00MiAwLTc1LjMyLTIwLjU1Ni03NS4zMi02OC4xMzQgMC00Ny41OSAzNC4wOS04Ni4yIDc2LjA5LTg2LjIgNDEuOTk3IDAgODEuNDYzIDI5LjMgODEuNDYzIDc2Ljg4eiIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICAgIGlkPSJwYXRoMjE3MSIKICAgICAgICAgIHN0eWxlPSJzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLXdpZHRoOjIuNTtmaWxsOiNmZmZmZmYiCiAgICAgICAgICBkPSJtLTkyLjI2Ny0xODUuODFjMy4yOTIgMTUuMTEgMjEuNzU0IDI3LjgyIDM0LjI2MyAyNi40NXMxNy45NzMtMTMuMjIgMTYuNDItMjYuNDVjLTEuNTUzLTEzLjIyLTE0LjE2Ni0yMy45NS0yOC4xNTUtMjMuOTUtMTMuOTg4IDAtMjUuODEyIDguODgtMjIuNTI4IDIzLjk1eiIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICAgIGlkPSJwYXRoMjE3MyIKICAgICAgICAgIHN0eWxlPSJzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLXdpZHRoOjIuNTtmaWxsOiNmZmZmZmYiCiAgICAgICAgICBkPSJtLTk2LjYzMi0xODguODVjLTIuODAxIDE2Ljc4LTIyLjMwOCAyNS42Ni0zNi42ODggMjQuMTMtMTQuMzktMS41Mi0yNC41Mi0xMS42NS0yMC40NS0yNS44OCAzLjkyLTEzLjY3IDE4LjQyLTIyLjUyIDM0LjU0LTI0LjI3IDE1LjM2LTEuNjggMjUuMzkzIDkuMjcgMjIuNTk4IDI2LjAyeiIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICAgIGlkPSJwYXRoMjE3NSIKICAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDAiCiAgICAgICAgICBkPSJtLTU0Ljk1NS0xMjBjMTkuMzkxLTQ0Ljc3LTIzLjEwMy0yNy41My00NS4xMDUtMzAuNDQtMjkuNTktMy45MS00Ny44NC0xNy40Ni01Ni41OCAxMi43OS01LjgyIDIwLjEzIDQuNzggNTAuMzA2IDM4LjE1IDUzLjM5NiAzMi4zOCAyLjk5OSA1NC4wNi0xMy44NzUgNjMuNTM1LTM1Ljc0NnoiCiAgICAgIC8+CiAgICAgIDxwYXRoCiAgICAgICAgICBpZD0icGF0aDIxODIiCiAgICAgICAgICBzdHlsZT0ic3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS13aWR0aDoyLjU7ZmlsbDpub25lIgogICAgICAgICAgZD0ibS05Mi4yODItMTkzLjI0YzcuMDM1LTUuNDYgMjMuMzE1LTkuMjggMzYuODExLTYuMDMiCiAgICAgIC8+CiAgICAgIDxwYXRoCiAgICAgICAgICBpZD0icGF0aDIxODQiCiAgICAgICAgICBzdHlsZT0ic3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS13aWR0aDoyLjU7ZmlsbDpub25lIgogICAgICAgICAgZD0ibS05Mi4wNzMtMTkxLjEzYzguMjkyIDUuOTEgMjUuMDk3IDEwLjA0IDQzLjM5NCAxMC40OSIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICAgIGlkPSJwYXRoMjE4NiIKICAgICAgICAgIHN0eWxlPSJzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLXdpZHRoOjIuNTtmaWxsOm5vbmUiCiAgICAgICAgICBkPSJtLTkxLjU2MS0xOTIuNDdjNC41NDgtMi4wMyAxMy4xNzUtMS4wNiAxOC4zNyAxLjk0IgogICAgICAvPgogICAgICA8cGF0aAogICAgICAgICAgaWQ9InBhdGgyMTg4IgogICAgICAgICAgc3R5bGU9InN0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2U6IzAwMDAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Utd2lkdGg6Mi41O2ZpbGw6bm9uZSIKICAgICAgICAgIGQ9Im0tOTYuOTUyLTE5NS42OGMtNy43NjgtNS40Ni0yNS43MjgtOS4yOC00MC42MjgtNi4wMyIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICAgIGlkPSJwYXRoMjE5MCIKICAgICAgICAgIHN0eWxlPSJzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLXdpZHRoOjIuNTtmaWxsOm5vbmUiCiAgICAgICAgICBkPSJtLTk3LjA0OC0xOTMuMjdjLTguMjEyIDcuNjMtMjQuODUyIDEyLjk4LTQyLjk2MiAxMy41NSIKICAgICAgLz4KICAgICAgPHBhdGgKICAgICAgICAgIGlkPSJwYXRoMjE5MiIKICAgICAgICAgIHN0eWxlPSJzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLXdpZHRoOjIuNTtmaWxsOm5vbmUiCiAgICAgICAgICBkPSJtLTk2LjU1OC0xOTMuN2MtNi45MzItMC42OC0xMy42MDItMC4zNi0xOC45MjIgMS42IgogICAgICAvPgogICAgPC9nCiAgICA+CiAgPC9nCiAgPgogIDxtZXRhZGF0YQogICAgPgogICAgPHJkZjpSREYKICAgICAgPgogICAgICA8Y2M6V29yawogICAgICAgID4KICAgICAgICA8ZGM6Zm9ybWF0CiAgICAgICAgICA+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0CiAgICAgICAgPgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiCiAgICAgICAgLz4KICAgICAgICA8Y2M6bGljZW5zZQogICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL3B1YmxpY2RvbWFpbi8iCiAgICAgICAgLz4KICAgICAgICA8ZGM6cHVibGlzaGVyCiAgICAgICAgICA+CiAgICAgICAgICA8Y2M6QWdlbnQKICAgICAgICAgICAgICByZGY6YWJvdXQ9Imh0dHA6Ly9vcGVuY2xpcGFydC5vcmcvIgogICAgICAgICAgICA+CiAgICAgICAgICAgIDxkYzp0aXRsZQogICAgICAgICAgICAgID5PcGVuY2xpcGFydDwvZGM6dGl0bGUKICAgICAgICAgICAgPgogICAgICAgICAgPC9jYzpBZ2VudAogICAgICAgICAgPgogICAgICAgIDwvZGM6cHVibGlzaGVyCiAgICAgICAgPgogICAgICAgIDxkYzp0aXRsZQogICAgICAgICAgPkJ1ZGR5IGxhdWdoaW5nPC9kYzp0aXRsZQogICAgICAgID4KICAgICAgICA8ZGM6ZGF0ZQogICAgICAgICAgPjIwMDgtMDctMThUMjA6MzI6Mzc8L2RjOmRhdGUKICAgICAgICA+CiAgICAgICAgPGRjOmRlc2NyaXB0aW9uCiAgICAgICAgLz4KICAgICAgICA8ZGM6c291cmNlCiAgICAgICAgICA+aHR0cHM6Ly9vcGVuY2xpcGFydC5vcmcvZGV0YWlsLzE3OTQ4L2J1ZGR5LWxhdWdoaW5nLWJ5LWFqPC9kYzpzb3VyY2UKICAgICAgICA+CiAgICAgICAgPGRjOmNyZWF0b3IKICAgICAgICAgID4KICAgICAgICAgIDxjYzpBZ2VudAogICAgICAgICAgICA+CiAgICAgICAgICAgIDxkYzp0aXRsZQogICAgICAgICAgICAgID5BSjwvZGM6dGl0bGUKICAgICAgICAgICAgPgogICAgICAgICAgPC9jYzpBZ2VudAogICAgICAgICAgPgogICAgICAgIDwvZGM6Y3JlYXRvcgogICAgICAgID4KICAgICAgICA8ZGM6c3ViamVjdAogICAgICAgICAgPgogICAgICAgICAgPHJkZjpCYWcKICAgICAgICAgICAgPgogICAgICAgICAgICA8cmRmOmxpCiAgICAgICAgICAgICAgPmNhcnRvb248L3JkZjpsaQogICAgICAgICAgICA+CiAgICAgICAgICAgIDxyZGY6bGkKICAgICAgICAgICAgICA+ZW1vdGlvbjwvcmRmOmxpCiAgICAgICAgICAgID4KICAgICAgICAgICAgPHJkZjpsaQogICAgICAgICAgICAgID5mdW5ueTwvcmRmOmxpCiAgICAgICAgICAgID4KICAgICAgICAgICAgPHJkZjpsaQogICAgICAgICAgICAgID5oYXBweTwvcmRmOmxpCiAgICAgICAgICAgID4KICAgICAgICAgICAgPHJkZjpsaQogICAgICAgICAgICAgID5sYXVnaDwvcmRmOmxpCiAgICAgICAgICAgID4KICAgICAgICAgICAgPHJkZjpsaQogICAgICAgICAgICAgID5zbWlsZXk8L3JkZjpsaQogICAgICAgICAgICA+CiAgICAgICAgICA8L3JkZjpCYWcKICAgICAgICAgID4KICAgICAgICA8L2RjOnN1YmplY3QKICAgICAgICA+CiAgICAgIDwvY2M6V29yawogICAgICA+CiAgICAgIDxjYzpMaWNlbnNlCiAgICAgICAgICByZGY6YWJvdXQ9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL3B1YmxpY2RvbWFpbi8iCiAgICAgICAgPgogICAgICAgIDxjYzpwZXJtaXRzCiAgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjUmVwcm9kdWN0aW9uIgogICAgICAgIC8+CiAgICAgICAgPGNjOnBlcm1pdHMKICAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNEaXN0cmlidXRpb24iCiAgICAgICAgLz4KICAgICAgICA8Y2M6cGVybWl0cwogICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0Rlcml2YXRpdmVXb3JrcyIKICAgICAgICAvPgogICAgICA8L2NjOkxpY2Vuc2UKICAgICAgPgogICAgPC9yZGY6UkRGCiAgICA+CiAgPC9tZXRhZGF0YQogID4KPC9zdmcKPgo="
        },
        {
          "id": 3,
          "name": "MeetDev",
          "languages": "Front: React, Redux, Sass, Axios. Back: PHP, Lumen Laravel",
          "link": "http://www.meetdev.alerafart.com/",
          "img": "http://www.meetdev.alerafart.com/static/media/rocket.038bac4ae2b0c287f145.png"
        }
        
      ]
      export default projects